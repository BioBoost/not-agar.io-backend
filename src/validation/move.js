const MoveSchemas = {
  action: {
    "type": "object",
    "properties": {
      "blob": { "enum": ['red', 'green', 'blue', 'white'] },
      "direction": { "enum": ['left', 'right', 'up', 'down'] },
      "distance": { "type": "integer" },
    },
    "required": ["blob", "direction", "distance"]
  }
}

export { MoveSchemas }