'use strict';

import React, { PropTypes } from 'react';
import ReactNative, { UIManager, requireNativeComponent, View } from 'react-native';


var {
    addons: { PureRenderMixin },
    findNodeHandle,
    NativeModules: { CrosswalkWebViewManager: { JSNavigationScheme } }
} = ReactNative;

var WEBVIEW_REF = 'crosswalkWebView';

var CrosswalkWebView = React.createClass({
    mixins:    [PureRenderMixin],
    statics:   { JSNavigationScheme },
    propTypes: {
        localhost:               PropTypes.bool.isRequired,
        onNavigationStateChange: PropTypes.func,
        url:                     PropTypes.string,
        injectedJavascript:      PropTypes.string,
        ...View.propTypes
    },
    getDefaultProps () {
        return {
            localhost: false
        };
    },
    render () {
        return (
            <NativeCrosswalkWebView
                { ...this.props }
                onNavigationStateChange={ this.onNavigationStateChange }
                ref={ WEBVIEW_REF }/>
        );
    },
    getWebViewHandle () {
        return findNodeHandle(this.refs[WEBVIEW_REF]);
    },
    onNavigationStateChange (event) {
        var { onNavigationStateChange } = this.props;
        if (onNavigationStateChange) {
            onNavigationStateChange(event.nativeEvent);
        }
    },
    goBack () {
        UIManager.dispatchViewManagerCommand(
            this.getWebViewHandle(),
            UIManager.CrosswalkWebView.Commands.goBack,
            null
        );
    },
    goForward () {
        UIManager.dispatchViewManagerCommand(
            this.getWebViewHandle(),
            UIManager.CrosswalkWebView.Commands.goForward,
            null
        );
    },
    reload () {
        UIManager.dispatchViewManagerCommand(
            this.getWebViewHandle(),
            UIManager.CrosswalkWebView.Commands.reload,
            null
        );
    },
    stopLoading () {
        UIManager.dispatchViewManagerCommand(
            this.getWebViewHandle(),
            UIManager.CrosswalkWebView.Commands.stopLoading,
            null
        );
    }
});

var NativeCrosswalkWebView = requireNativeComponent('CrosswalkWebView', CrosswalkWebView);

export default CrosswalkWebView;
