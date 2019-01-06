# CommonUnits time polybar module

## Usage

+ `git clone https://github.com/commonunits/time`
+ `cp -r time/polybar/clarke-time ~/.config/polybar/`
+ Add the following section to the polybar config.
```
[module/clarke-time]
type = custom/script
exec = ~/.config/polybar/clarke-time/clarke-time.sh
interval = 1
```
+ Add `clarke-time` in `modules-center`, `modules-left` or `modules-right`
