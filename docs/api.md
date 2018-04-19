## Modules

<dl>
<dt><a href="#module_events">events</a></dt>
<dd><p>Hosts all event-related code and the EventsManager class.</p>
</dd>
<dt><a href="#module_helpers">helpers</a></dt>
<dd><p>Hosts all helper functions.</p>
</dd>
<dt><a href="#module_video">video</a></dt>
<dd><p>Hosts the Video class.</p>
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
    * [~validEvents](#module_events..validEvents) : <code>array</code>
    * [~isValidEvent(event)](#module_events..isValidEvent)

<a name="module_events..EventsManager"></a>

### events~EventsManager
**Kind**: inner class of <code>[events](#module_events)</code>  
<a name="new_module_events..EventsManager_new"></a>

#### new EventsManager()
Coordinates internal video player events.

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

<a name="module_helpers"></a>

## helpers
Hosts all helper functions.

<a name="module_helpers..DOMHelpers"></a>

### helpers~DOMHelpers : <code>object</code>
DOM-related helper functions.

**Kind**: inner namespace of <code>[helpers](#module_helpers)</code>  
<a name="module_video"></a>

## video
Hosts the Video class.


* [video](#module_video)
    * [~Video](#module_video..Video)
        * [new Video(props)](#new_module_video..Video_new)
    * [~defaultPlayerDimensions](#module_video..defaultPlayerDimensions) : <code>object</code>

<a name="module_video..Video"></a>

### video~Video
**Kind**: inner class of <code>[video](#module_video)</code>  
<a name="new_module_video..Video_new"></a>

#### new Video(props)
The interface for a video player instance.


| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> | Configuration options for the player. |

<a name="module_video..defaultPlayerDimensions"></a>

### video~defaultPlayerDimensions : <code>object</code>
The default player dimensions if neither
"fitContainer" nor "dimensions" are passed on instantiation.

**Kind**: inner constant of <code>[video](#module_video)</code>  
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
