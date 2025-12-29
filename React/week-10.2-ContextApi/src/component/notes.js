/*
      PROP DRILLING...
Prop Drilling Occurs when you need to pass a data from a higher-level Component down to a  lower level Component
that is several layers deep in the Component Tree.

you may have to pass props through many intermediate Components
that dont use the props themselve just to get them to the Component that need them.

it can make code harder to maintain , as changes in prop structure required updates in mutliple Components
*/

/*
 CONTEXT - API 
 is a powerful feature in react that enables you to manage state across your application more effectively , especially when dealing with deeply nested componets 

 It lets you deal /solve the problem of prop drilling

 the contextApi provides a way to share value(state , function etc) between components without having to pass prop down manually at entry level.

 it has  3 steps 
 1.context -> created using React.createContext() serves as container for data u want to create/share to other component.
-> usually it is defined outside in a seprate file outside the component chain.



 2.provider -> The component wraps part of your application and provide contet value to all its  descendantsAny component that is child of the provider can access the context.
 
 3.consumer -> 
*/