# Not-Agar.io - Backend

Not-Agar.io is a Phaser game that seems to be based on Agar.io but isn't.

This backend tunnels API requests via WebSockets to the Phaser game. It also allows the Phaser game to render the canvas on the 99 bugs display running the rust API.

The Phaser game can than be controller using this backend API.

## REST API

TODO

## Related Repositories

* [Not-Agar.io](https://github.com/BioBoost/not-agar.io) which contains the Phaser project
* [99-Bugs led display API](https://github.com/BioBoost/99bugs-led-display-api) which contains the LED display API (in rust)
* [Rust Driver 99 Bugs Display](https://github.com/BioBoost/99bugs-led-display-driver) which contains the SPI driver for the Raspberry Pi that communicates with the Mojo FPGA
* [Mojo RGB Led Panel Control](https://github.com/BioBoost/mojo_rgb_led_panel_vhdl) the VHDL project that models the FPGA to drive the LED displays and can be controlled via SPI.