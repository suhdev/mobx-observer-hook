# mobx-observer-hook 

## Usage 

```typescript
import * as React from 'react'; 
import * as ReactDOM from 'react-dom';
import { observable, action } from 'mobx'; 
import { useObserver } from 'mobx-observer-hook'; 

class Model {
  @observable name = 'test'; 
  @observable time:Date = new Date();

  @action.bound
  setTime(time:Date) {
    this.time = time;
  }
}

function MyComponent({model}) {
  return useObserver(()=><div 
    className="my-component">{model.name} - {model.time.toString()}</div>,[model]);
}

let el = document.getElementById('app');

if (!el){
  el = document.createElement('div');
  el.id = 'app';
  document.body.appendChild(el);
}

const m = new Model();
m.name = 'Suhail'; 

ReactDOM.render(
  <MyComponent model={m} />,
  el
);

setInterval(()=>{
  m.setTime(new Date());
},1000);

```