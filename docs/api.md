## Modules

<dl>
<dt><a href="#module_container">container</a></dt>
<dd><p>Hosts the Container class.</p>
</dd>
<dt><a href="#module_dispatcher">dispatcher</a></dt>
<dd><p>Hosts all event-related code and the Dispatcher class.</p>
</dd>
<dt><a href="#module_errors">errors</a></dt>
<dd><p>Hosts all error-related code and the PlayerError class.</p>
</dd>
<dt><a href="#module_helpers">helpers</a></dt>
<dd><p>Hosts all helper functions.</p>
</dd>
<dt><a href="#module_player">player</a></dt>
<dd><p>Hosts the Player class.</p>
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

<a name="module_container"></a>

## container
Hosts the Container class.


* [container](#module_container)
    * [~Container](#module_container..Container)
        * [new Container(props, dispatcher)](#new_module_container..Container_new)
    * [~defaultDimensions](#module_container..defaultDimensions) : <code>object</code>

<a name="module_container..Container"></a>

### container~Container
**Kind**: inner class of <code>[container](#module_container)</code>  
<a name="new_module_container..Container_new"></a>

#### new Container(props, dispatcher)
The video player's outer HTML.


| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> | Configuration for the container. |
| dispatcher | <code>object</code> | The Dispatcher instance of the video player. |

<a name="module_container..defaultDimensions"></a>

### container~defaultDimensions : <code>object</code>
The default player dimensions if neither
"resizeToFitParent" nor "dimensions" are passed on instantiation.

**Kind**: inner constant of <code>[container](#module_container)</code>  
<a name="module_dispatcher"></a>

## dispatcher
Hosts all event-related code and the Dispatcher class.


* [dispatcher](#module_dispatcher)
    * [~Dispatcher](#module_dispatcher..Dispatcher)
        * [new Dispatcher()](#new_module_dispatcher..Dispatcher_new)
    * [~validEvents](#module_dispatcher..validEvents) : <code>array</code>
    * [~isValidEvent(event)](#module_dispatcher..isValidEvent)

<a name="module_dispatcher..Dispatcher"></a>

### dispatcher~Dispatcher
**Kind**: inner class of <code>[dispatcher](#module_dispatcher)</code>  
<a name="new_module_dispatcher..Dispatcher_new"></a>

#### new Dispatcher()
Coordinates internal video player events.

<a name="module_dispatcher..validEvents"></a>

### dispatcher~validEvents : <code>array</code>
The official list of valid video player events.

**Kind**: inner constant of <code>[dispatcher](#module_dispatcher)</code>  
<a name="module_dispatcher..isValidEvent"></a>

### dispatcher~isValidEvent(event)
- Determines if the submitted event is officially
recognized by the player.

**Kind**: inner method of <code>[dispatcher](#module_dispatcher)</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | The event being assessed. |

<a name="module_errors"></a>

## errors
Hosts all error-related code and the PlayerError class.


* [errors](#module_errors)
    * [~PlayerError](#module_errors..PlayerError)
        * [new PlayerError(props, dispatcher)](#new_module_errors..PlayerError_new)

<a name="module_errors..PlayerError"></a>

### errors~PlayerError
**Kind**: inner class of <code>[errors](#module_errors)</code>  
<a name="new_module_errors..PlayerError_new"></a>

#### new PlayerError(props, dispatcher)
Describes and reports internal player errors.


| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> | Error data. |
| dispatcher | <code>object</code> | The Dispatcher instance of the video player. |

<a name="module_helpers"></a>

## helpers
Hosts all helper functions.

<a name="module_helpers..DOMHelpers"></a>

### helpers~DOMHelpers : <code>object</code>
DOM-related helper functions.

**Kind**: inner namespace of <code>[helpers](#module_helpers)</code>  
<a name="module_player"></a>

## player
Hosts the Player class.


* [player](#module_player)
    * [~Player](#module_player..Player)
        * [new Player(props)](#new_module_player..Player_new)

<a name="module_player..Player"></a>

### player~Player
**Kind**: inner class of <code>[player](#module_player)</code>  
<a name="new_module_player..Player_new"></a>

#### new Player(props)
The interface for a video player instance.


| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> | Configuration options for the player. |

<a name="module_video"></a>

## video
Hosts the Video class.


* [video](#module_video)
    * [~Video](#module_video..Video)
        * [new Video(props, dispatcher)](#new_module_video..Video_new)

<a name="module_video..Video"></a>

### video~Video
**Kind**: inner class of <code>[video](#module_video)</code>  
<a name="new_module_video..Video_new"></a>

#### new Video(props, dispatcher)
Video instances within the player.


| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> | Configuration for the video. |
| dispatcher | <code>object</code> | The Dispatcher instance of the video player. |

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
Generates a new instance of the Player class.

**Kind**: static method of <code>[Dart](#Dart)</code>  
