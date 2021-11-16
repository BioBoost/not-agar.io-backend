# Not-Agar.io - Backend

Not-Agar.io is a Phaser game that seems to be based on Agar.io but isn't.

This backend tunnels API requests via WebSockets to the Phaser game. It also allows the Phaser game to render the canvas on the 99 bugs display running the rust API.

The Phaser game can than be controller using this backend API.

## API Description

* **GET "/"**
  * Just some welcome message and API version
  * Returns json object
    ```json
    {
      "message": "Welcome to not-agar.io backend API",
      "version": "0.1.0"
    }
    ```

* **POST "/move/:player"**
  * Allow `player` to move towards a direction with a given distance
    * *At this time `player` is not properly defined but is expected to be a `string`*
  * Expects json object
      ```json
      {
        "blob": "red",
        "direction": "up",
        "distance": 3
      }
      ```
      * `blob` can be any of `red`, `green`, `blue` or `white`
      * `direction` can be any of `up`, `down`, `left` or `right`
      * `distance` should be positive integer

* **POST "/shoot"**
  * Allow a blob to shoot at another blob
  * Expects json object
      ```json
      {
        "target": {
          "player": "nico",
          "blob": "red"
        },
        "source": {
          "player": "dennis",
          "blob": "green"
        }
      }
      ```
      * `target` contains the information of the blob who is being shot at
      * `source` contains the information of the blob who is doing the shooting
      * `blob` can be any of `red`, `green`, `blue` or `white`
      * *At this time `player` is not properly defined but is expected to be a `string`*

## Related Repositories

* [Not-Agar.io](https://github.com/BioBoost/not-agar.io) which contains the Phaser project
* [99-Bugs led display API](https://github.com/BioBoost/99bugs-led-display-api) which contains the LED display API (in rust)
* [Rust Driver 99 Bugs Display](https://github.com/BioBoost/99bugs-led-display-driver) which contains the SPI driver for the Raspberry Pi that communicates with the Mojo FPGA
* [Mojo RGB Led Panel Control](https://github.com/BioBoost/mojo_rgb_led_panel_vhdl) the VHDL project that models the FPGA to drive the LED displays and can be controlled via SPI.