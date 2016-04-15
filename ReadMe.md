# logiX-tour
A user onboarding library written in pure JavaScript

Currently Supports:
* React
* Theoretically this should work with any require library

<img src="indicator.gif" width="50%" />

### Quick Start
     npm install --save logix-tour

> Set an indicator by adding a class of {_your-prefix_}-tour (i.e. my-app-tour)

> Set pop up text by adding a [data-tour-text] attribute

> Run tour.runMe(_prefix_) (i.e. tour.runMe('my-app'))

---

### Usage In React

```javascript
  import tour from 'logix-tour';

  class App extends Component {
    componentDidMount() {
      // SET THE "APPEND TARGET" TO THE ID OF YOUR ELEMENT
      tour.setConfig({ appendTarget: 'My_Awesome_List' });
      // CALL "RUN ME" WITH YOUR DESIRED PREFIX
      tour.runMe('mal')
    }
    render() {
      return (
        <div id="My_Awesome_List">
          <ul
            className="mal-tour"
            data-tour-text="Awesome pop up text here"
          >
            <li>Waffles</li>
            <li>Pancakes</li>
            <li>Butter</li>
            <li>Syrup</li>
          </ul>
        </div>
      )
    }
  }
```
---
## Methods

### runMe(_prefix_)

Use this to initialize your onboarding

* prefix
> this will run the tour on all elements with a class name of {prefix}-tour

### setConfig(_config_object_)

Use this method to set global configs

Current config options
> * appendTarget

```javascript
  import tour from 'logix-tour';

  const config = {
    appendTarget: 'app', // your root element, defaults to document.body
  }

  tour.setConfig(config);
```

## COMING UP
- Better styles
- Angular support
- More config options;
