### When to use the Factory Pattern

The Factory pattern can be especially useful when applied to the following situations:

- When our object or component setup involves a high level of complexity
- When we need to easily generate different instances of objects depending on the environment we are in
- When we're working with many small objects or components that share the same properties
- When composing objects with instances of other objects that need only satisfy an API contract (aka, duck typing) to work. This is useful for decoupling.

A Factory can provide a generic interface for creating objects, where we can specify the type of factory object we wish to be created.
