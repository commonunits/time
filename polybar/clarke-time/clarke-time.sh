#!/usr/bin/env bash

seconds=$(($(date +%-H)*3600 + $(date +%-M)*60 + $(date +%-S)))
clarkes=$(($seconds*100000/86400))
printf '%02d.%03d kϾ' $(($clarkes/1000)) $(($clarkes%1000))
