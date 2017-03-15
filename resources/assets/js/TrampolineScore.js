'use strict';

import Score from './Score';

class TrampolineScore extends Score {
    constructor() {
        super();
        this.discipline = 'trampoline';
        this.label = 'Trampoline';
        this.routineKeys = ['prelim_compulsory', 'prelim_optional', 'semi_final_optional', 'final_optional'];

        this.attrs.time_of_flight = {
            order: 10,
            value: null
        };

        this.attrs.horizontal_displacement = {
            order: 11,
            value: null
        };

    }
}

export default TrampolineScore;