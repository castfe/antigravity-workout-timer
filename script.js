const configSection = document.getElementById('config-section');
const timerSection = document.getElementById('timer-section');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');

const inputs = {
    name: document.getElementById('set-name'),
    sets: document.getElementById('num-sets'),
    work: document.getElementById('work-time'),
    rest: document.getElementById('rest-time')
};

const display = {
    name: document.getElementById('current-exercise-name'),
    currentSet: document.getElementById('current-set'),
    totalSets: document.getElementById('total-sets'),
    phase: document.getElementById('phase-indicator'),
    time: document.getElementById('time-display')
};

const audio = {
    element: document.getElementById('main-audio'),
    files: {
        startSet: 'start_set.wav',
        endSet: 'end_set.wav',
        startRest: 'start_rest.wav',
        endRest: 'end_rest.wav'
    }
};

let state = {
    currentSet: 1,
    totalSets: 3,
    workTime: 15,
    restTime: 3,
    currentTime: 0,
    phase: 'IDLE', // IDLE, WORK, REST, FINISHED
    intervalId: null
};

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function playSound(filename) {
    if (audio.element && filename) {
        audio.element.src = filename;
        audio.element.play().catch(e => console.log('Audio play failed:', e));
    }
}

function updateDisplay() {
    display.time.textContent = formatTime(state.currentTime);
    display.currentSet.textContent = state.currentSet;

    // Update Phase UI
    document.body.className = ''; // Reset classes
    if (state.phase === 'WORK') {
        document.body.classList.add('phase-work');
        display.phase.textContent = 'WORK';
    } else if (state.phase === 'REST') {
        document.body.classList.add('phase-rest');
        display.phase.textContent = 'REST';
    } else if (state.phase === 'FINISHED') {
        document.body.classList.add('phase-finished');
        display.phase.textContent = 'DONE';
    } else {
        display.phase.textContent = 'GET READY';
    }
}

function switchPhase(newPhase) {
    state.phase = newPhase;

    if (newPhase === 'WORK') {
        state.currentTime = state.workTime;
        playSound(audio.files.startSet);
    } else if (newPhase === 'REST') {
        state.currentTime = state.restTime;
        playSound(audio.files.startRest);
    } else if (newPhase === 'FINISHED') {
        state.currentTime = 0;
        clearInterval(state.intervalId);
        playSound(audio.files.endSet);
        updateDisplay();
        return; // Don't restart timer
    }

    updateDisplay();
    // Restart timer after phase switch
    if (state.intervalId) clearInterval(state.intervalId);
    state.intervalId = setInterval(tick, 1000);
}

function handlePhaseEnd() {
    clearInterval(state.intervalId); // Stop the timer temporarily

    let nextPhase = '';
    let endSound = null;

    if (state.phase === 'WORK') {
        endSound = audio.files.endSet;
        if (state.currentSet < state.totalSets) {
            nextPhase = 'REST';
        } else {
            nextPhase = 'FINISHED';
        }
    } else if (state.phase === 'REST') {
        endSound = audio.files.endRest;
        state.currentSet++;
        nextPhase = 'WORK';
    }

    playSound(endSound);

    // Wait for audio to finish (approx 2 seconds) before switching
    setTimeout(() => {
        switchPhase(nextPhase);
    }, 2000);
}

function tick() {
    if (state.currentTime > 0) {
        state.currentTime--;
        updateDisplay();
    } else {
        handlePhaseEnd();
    }
}

function unlockAudio() {
    // Play silence or just play/pause the single element to bless it
    // We'll set it to one of the sounds but volume 0 or just pause immediately
    // Setting src to empty or a silent wav is safer, but let's try just play/pause
    // with the first sound we might need.
    audio.element.src = audio.files.startSet;
    audio.element.muted = true;
    const playPromise = audio.element.play();
    if (playPromise !== undefined) {
        playPromise.then(() => {
            audio.element.pause();
            audio.element.currentTime = 0;
            audio.element.muted = false;
        }).catch(error => {
            console.log('Audio unlock failed:', error);
        });
    }
}

function startTimer() {
    // Unlock audio contexts for mobile
    unlockAudio();

    // Get values
    state.totalSets = parseInt(inputs.sets.value);
    state.workTime = parseInt(inputs.work.value);
    state.restTime = parseInt(inputs.rest.value);
    state.currentSet = 1;

    display.name.textContent = inputs.name.value || 'Exercise';
    display.totalSets.textContent = state.totalSets;

    // UI Switch
    configSection.classList.add('hidden');
    timerSection.classList.remove('hidden');

    // Start
    switchPhase('WORK'); // This starts the interval
}

function stopTimer() {
    clearInterval(state.intervalId);
    state.phase = 'IDLE';
    document.body.className = '';

    configSection.classList.remove('hidden');
    timerSection.classList.add('hidden');
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
