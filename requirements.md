# Resource read access

An actor may read a resource only when both tenant identifiers are nonempty and the actor's tenant identifier equals the resource's tenant identifier. An empty identifier never grants access. The helper should return a Boolean and must not depend on external services.
