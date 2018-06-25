## Modules

<dl>
<dt><a href="#module_container">container</a></dt>
<dd><p>Hosts the Container class.</p>
</dd>
<dt><a href="#module_controls">controls</a></dt>
<dd><p>Hosts all player-controls-related code and the Controls class.</p>
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
<dt><a href="#module_interval">interval</a></dt>
<dd><p>Hosts the MasterInterval class.</p>
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

## Constants

<dl>
<dt><a href="#defaultStyles">defaultStyles</a> : <code>string</code></dt>
<dd><p>The default styles for the video player.</p>
</dd>
<dt><a href="#events">events</a> : <code>array</code></dt>
<dd><p>The official list of valid video player events.</p>
</dd>
<dt><a href="#playIcon">playIcon</a> : <code>string</code></dt>
<dd><p>The SVG markup for the &quot;play&quot; button. Taken from
the &quot;Feather&quot; collection at <a href="https://feathericons.com/">https://feathericons.com/</a>.</p>
</dd>
<dt><a href="#pauseIcon">pauseIcon</a> : <code>string</code></dt>
<dd><p>The SVG markup for the &quot;pause&quot; button. Taken from
the &quot;Feather&quot; collection at <a href="https://feathericons.com/">https://feathericons.com/</a>.</p>
</dd>
<dt><a href="#previousIcon">previousIcon</a> : <code>string</code></dt>
<dd><p>The SVG markup for the &quot;previous&quot; button. Taken from
the &quot;Feather&quot; collection at <a href="https://feathericons.com/">https://feathericons.com/</a>.</p>
</dd>
<dt><a href="#nextIcon">nextIcon</a> : <code>string</code></dt>
<dd><p>The SVG markup for the &quot;next&quot; button. Taken from
the &quot;Feather&quot; collection at <a href="https://feathericons.com/">https://feathericons.com/</a>.</p>
</dd>
<dt><a href="#loadingIcon">loadingIcon</a> : <code>string</code></dt>
<dd><p>The SVG markup for the loading icon. Taken from
Sam Herbet&#39;s collection here: <a href="http://samherbert.net/svg-loaders/">http://samherbert.net/svg-loaders/</a></p>
</dd>
<dt><a href="#layout">layout</a> : <code>string</code></dt>
<dd><p>The CSS layout defaults for the video player.</p>
</dd>
<dt><a href="#readyStates">readyStates</a> : <code>object</code></dt>
<dd><p>Aliases for the video element ready states.</p>
</dd>
<dt><a href="#selectors">selectors</a> : <code>object</code></dt>
<dd><p>CSS selectors for the video player.</p>
</dd>
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
<a name="module_controls"></a>

## controls
Hosts all player-controls-related code and the Controls class.


* [controls](#module_controls)
    * [~Controls](#module_controls..Controls)
        * [new Controls(player, parentNode)](#new_module_controls..Controls_new)
    * [~isValidEvent(event)](#module_controls..isValidEvent)

<a name="module_controls..Controls"></a>

### controls~Controls
**Kind**: inner class of <code>[controls](#module_controls)</code>  
<a name="new_module_controls..Controls_new"></a>

#### new Controls(player, parentNode)
Facilitates user interaction with the video player.


| Param | Type | Description |
| --- | --- | --- |
| player | <code>object</code> | The video player instance. |
| parentNode | <code>object</code> | The element to append the controls to. |

<a name="module_controls..isValidEvent"></a>

### controls~isValidEvent(event)
- Determines if the submitted event is officially
recognized by the player.

**Kind**: inner method of <code>[controls](#module_controls)</code>  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | The event being assessed. |

<a name="module_dispatcher"></a>

## dispatcher
Hosts all event-related code and the Dispatcher class.


* [dispatcher](#module_dispatcher)
    * [~Dispatcher](#module_dispatcher..Dispatcher)
        * [new Dispatcher(debug)](#new_module_dispatcher..Dispatcher_new)

<a name="module_dispatcher..Dispatcher"></a>

### dispatcher~Dispatcher
**Kind**: inner class of <code>[dispatcher](#module_dispatcher)</code>  
<a name="new_module_dispatcher..Dispatcher_new"></a>

#### new Dispatcher(debug)
Coordinates internal video player events. The Dispatcher
instance for the video player gets initialized as a property of the
Player instance, then passed to sub-components of the player on
their instantiation. This way, events emitted on sub-components can
bubble up to the player's interface.


| Param | Type | Description |
| --- | --- | --- |
| debug | <code>boolean</code> | Whether the player is initialized in developer mode. |

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


* [helpers](#module_helpers)
    * [~DOMHelpers](#module_helpers..DOMHelpers) : <code>object</code>
    * [~mathHelpers](#module_helpers..mathHelpers) : <code>object</code>

<a name="module_helpers..DOMHelpers"></a>

### helpers~DOMHelpers : <code>object</code>
DOM-related helper functions.

**Kind**: inner namespace of <code>[helpers](#module_helpers)</code>  
<a name="module_helpers..mathHelpers"></a>

### helpers~mathHelpers : <code>object</code>
Math-related helper functions.

**Kind**: inner namespace of <code>[helpers](#module_helpers)</code>  
<a name="module_interval"></a>

## interval
Hosts the MasterInterval class.


* [interval](#module_interval)
    * [~MasterInterval](#module_interval..MasterInterval)
        * [new MasterInterval()](#new_module_interval..MasterInterval_new)

<a name="module_interval..MasterInterval"></a>

### interval~MasterInterval
**Kind**: inner class of <code>[interval](#module_interval)</code>  
<a name="new_module_interval..MasterInterval_new"></a>

#### new MasterInterval()
Handles all interval-based checks.

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
Generates a new instance of the Player class
and exposes a limited interface.

**Kind**: static method of <code>[Dart](#Dart)</code>  
<a name="defaultStyles"></a>

## defaultStyles : <code>string</code>
The default styles for the video player.

**Kind**: global constant  
<a name="events"></a>

## events : <code>array</code>
The official list of valid video player events.

**Kind**: global constant  
<a name="playIcon"></a>

## playIcon : <code>string</code>
The SVG markup for the "play" button. Taken from
the "Feather" collection at https://feathericons.com/.

**Kind**: global constant  
<a name="pauseIcon"></a>

## pauseIcon : <code>string</code>
The SVG markup for the "pause" button. Taken from
the "Feather" collection at https://feathericons.com/.

**Kind**: global constant  
<a name="previousIcon"></a>

## previousIcon : <code>string</code>
The SVG markup for the "previous" button. Taken from
the "Feather" collection at https://feathericons.com/.

**Kind**: global constant  
<a name="nextIcon"></a>

## nextIcon : <code>string</code>
The SVG markup for the "next" button. Taken from
the "Feather" collection at https://feathericons.com/.

**Kind**: global constant  
<a name="loadingIcon"></a>

## loadingIcon : <code>string</code>
The SVG markup for the loading icon. Taken from
Sam Herbet's collection here: http://samherbert.net/svg-loaders/

**Kind**: global constant  
<a name="layout"></a>

## layout : <code>string</code>
The CSS layout defaults for the video player.

**Kind**: global constant  
<a name="readyStates"></a>

## readyStates : <code>object</code>
Aliases for the video element ready states.

**Kind**: global constant  
<a name="selectors"></a>

## selectors : <code>object</code>
CSS selectors for the video player.

**Kind**: global constant  
