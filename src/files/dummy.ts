const dummy = (shouldTriggerCallback: boolean, callback: () => number): void => {
    if(shouldTriggerCallback) callback();
}

export default dummy;