const MoveSchemas = {
  params: {
    "type": "object",
    "properties": {
      "player": { "type": "string" },
    },
    "required": ["player"]
  },
  action: {
    "type": "object",
    "properties": {
      "blob": { "enum": ['red', 'green', 'blue', 'white'] },
      "direction": { "enum": ['left', 'right', 'up', 'down'] },
      "distance": { "type": "integer", "minimum": 0 },
    },
    "required": ["blob", "direction", "distance"]
  }
}

export { MoveSchemas }