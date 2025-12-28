/*

Prop Drilling Occurs when you need to pass a data from a higher-level Component down to a  lower level Component
that is several layers deep in the Component Tree.

you may have to pass props through many intermediate Components
that dont use the props themselve just to get them to the Component that need them.

it can make code harder to maintain , as changes in prop structure required updates in mutliple Components
*/