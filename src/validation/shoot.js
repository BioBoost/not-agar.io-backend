const ShootSchemas = {
  action: {
    "type": "object",
    "properties": {
      "source": {
        "type": "object",
        "properties": {
          "player": { "type": "string" },
          "blob": { "enum": ['red', 'green', 'blue', 'white'] }
        },
        "required": ["player", "blob"]
      },
      "target": {
        "type": "object",
        "properties": {
          "player": { "type": "string" },
          "blob": { "enum": ['red', 'green', 'blue', 'white'] }
        },
        "required": ["player", "blob"]
      },
    },
    "required": ["source", "target"]
  }
}

export { ShootSchemas }