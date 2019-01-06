#!/usr/bin/env bash

seconds=$(($(date +%-H)*3600 + $(date +%-M)*60 + $(date +%-S)))
clarkes=$(printf '%05d' $(($seconds*100000/86400)))
echo $(($clarkes/1000)).$(($clarkes%1000)) kϾ
