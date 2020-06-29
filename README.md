#### Context、HashRouter、Link、Redirect、Route、Switchss


const { Provider, Consumer } = React.createContext()

this.props.children

```
  window.addEventListener('hashchange', (e) => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1) || '/'
        }   
      })
    })
```