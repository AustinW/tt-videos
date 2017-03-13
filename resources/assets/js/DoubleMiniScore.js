'use strict';

import Score from './Score';

class DoubleMiniScore extends Score {
    constructor() {
        super();
        this.discipline = 'dmt';
        this.label = 'Double Mini';
        this.routineKeys = ['prelim_pass_1', 'prelim_pass_2', 'final_pass_3', 'final_pass_4'];
    }
}

export default DoubleMiniScore;