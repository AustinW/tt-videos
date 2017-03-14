'use strict';

class Score {
    constructor() {
        this.attrs = {
            execution: {
                order: 1,
                label: 'Execution',
                title: 'Execution',
                value: null
            },
            difficulty: {
                order: 2,
                label: 'Difficulty',
                title: 'Difficulty',
                value: null
            },
            neutral_deduction: {
                order: 20,
                label: 'ND',
                title: 'Neutral Deduction',
                value: null
            },
            total_score: {
                order: 100,
                label: 'Total Score',
                title: 'Total Score',
                value: null
            },
        };

        this.video_id = null;
    }

    setVideoId(id) {
        this.video_id = id;
    }

    updateAttributes(attributes) {
        Object.keys(attributes).forEach((key) => {
            this.attrs[key].value = attributes[key];
        });
    }

    scoreKeys() {
        return Object.keys(this.attrs).sort((a, b) => { return this.attrs[a].order - this.attrs[b].order; });
    }

    getLabel(key) {
        return this.attrs[key].label;
    }

    getTitle(key) {
        return this.attrs[key].title;
    }

    hasScore() {
        return this.attrs.total_score.value !== null && this.attrs.total_score.value > 0;
    }
}

export default Score;