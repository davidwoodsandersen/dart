## Modules

<dl>
<dt><a href="#module_events">events</a></dt>
<dd><p>Hosts all event-related code and the EventsManager class.</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#Dart">Dart</a></dt>
<dd></dd>
</dl>

<a name="module_events"></a>

## events
Hosts all event-related code and the EventsManager class.


* [events](#module_events)
    * [~EventsManager](#module_events..EventsManager)
        * [new EventsManager()](#new_module_events..EventsManager_new)
    * [~Video](#module_events..Video)
        * [new Video(props)](#new_module_events..Video_new)
    * [~validEvents](#module_events..validEvents) : <code>array</code>
    * [~isValidEvent(event)](#module_events..isValidEvent)

<a name="module_events..EventsManager"></a>

### events~EventsManager
**Kind**: inner class of <code>[events](#module_events)</code>  
<a name="new_module_events..EventsManager_new"></a>

#### new EventsManager()
Coordinates internal video player events.

<a name="module_events..Video"></a>

### events~Video
**Kind**: inner class of <code>[events](#module_events)</code>  
<a name="new_module_events..Video_new"></a>

#### new Video(props)
The interface for a video player instance.


| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> | Configuration options for the player. |

<a name="module_events..validEvents"></a>

### events~validEvents : <code>array</code>
The official list of valid video player events.

**Kind**: inner constant of <code>[events](#module_events)</code>  
<a name="module_events..isValidEvent"></a>

### events~isValidEvent(event)
- Determines if the submitted event is officially
recognized by the player.

**Kind**: inner method of <code>[events](#module_events)</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | The event being assessed. |

<a name="Dart"></a>

## Dart
**Kind**: global class  

* [Dart](#Dart)
    * [new Dart()](#new_Dart_new)
    * [.create()](#Dart.create)

<a name="new_Dart_new"></a>

### new Dart()
Gets instantiated and written to the window
as the value of "globalVarName" in package.json.

<a name="Dart.create"></a>

### Dart.create()
Generates a new instance of the Video class.

**Kind**: static method of <code>[Dart](#Dart)</code>  
