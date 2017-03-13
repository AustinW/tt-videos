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
            label: 'TOF',
            title: 'Time of Flight',
            value: null
        };

        this.attrs.horizontal_displacement = {
            order: 11,
            label: 'HD',
            title: 'Horizontal Displacement',
            value: null
        };

    }
}

export default TrampolineScore;