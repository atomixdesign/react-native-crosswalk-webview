package com.atomix.react.crosswalk.webview;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.RCTEventEmitter;

class NavigationStateChangeEvent extends Event<NavigationStateChangeEvent> {

    public static final String EVENT_NAME = "navigationStateChange";

    private final String title;

    private final boolean isLoading;

    private final String url;

    private final boolean canGoBack;

    private final boolean canGoForward;

    protected NavigationStateChangeEvent (int viewTag, long timestampMs, String _title, boolean _isLoading, String _url, boolean _canGoBack, boolean _canGoForward) {
        super(viewTag, timestampMs);

        title = _title;
        isLoading = _isLoading;
        url = _url;
        canGoBack = _canGoBack;
        canGoForward = _canGoForward;
    }

    @Override
    public String getEventName () {
        return EVENT_NAME;
    }

    @Override
    public void dispatch (RCTEventEmitter rctEventEmitter) {
        rctEventEmitter.receiveEvent(getViewTag(), getEventName(), serializeEventData());
    }

    private WritableMap serializeEventData () {
        WritableMap eventData = Arguments.createMap();
        eventData.putString("title", title);
        eventData.putBoolean("loading", isLoading);
        eventData.putString("url", url);
        eventData.putBoolean("canGoBack", canGoBack);
        eventData.putBoolean("canGoForward", canGoForward);

        return eventData;
    }
}
