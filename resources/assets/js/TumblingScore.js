'use strict';

import Score from './Score';

class TumblingScore extends Score {
    constructor() {
        super();
        this.discipline = 'tumbling';
        this.label = 'Tumbling';
        this.routineKeys = ['prelim_pass_1', 'prelim_pass_2', 'final_pass_3', 'final_pass_4'];
    }
}

export default TumblingScore;