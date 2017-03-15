'use strict';

import math from 'mathjs';

class Score {
    constructor() {
        this.attrs = {
            execution: {
                order: 1,
                value: null
            },
            difficulty: {
                order: 2,
                value: null
            },
            neutral_deduction: {
                order: 20,
                value: null
            },
            total_score: {
                order: 100,
                value: null
            },
        };

        this.video_id = null;
        this.videoFilename = null;
        this.id = null;
    }

    setId(id) {
        this.id = id;
    }

    setVideoId(videoId) {
        this.video_id = videoId;
    }

    setVideoFilename(videoFilename) {
        this.videoFilename = videoFilename;
    }

    hasVideo() {
        return !! this.video_id;
    }

    updateAttributes(attributes) {
        Object.keys(attributes).forEach((key) => {
            this.attrs[key].value = attributes[key];
        });
    }

    scoreKeys() {
        return Object.keys(this.attrs).sort((a, b) => { return this.attrs[a].order - this.attrs[b].order; });
    }

    hasScore() {
        (this.attrs.total_score.value !== null && this.attrs.total_score.value > 0);
    }

    attribute(key) {
        this.attrs[key].value;
    }

    computeTotal() {
        let sum = 0;

        this.scoreKeys().forEach((component_key) => {
            if (component_key === 'neutral_deduction') {
                sum = (this.attrs.neutral_deduction.value) ? math.subtract(sum, this.attrs.neutral_deduction.value) : sum;
            } else if (component_key !== 'total_score') {
                sum = (this.attrs[component_key].value) ? math.add(sum, this.attrs[component_key].value) : sum;
            }
        });

        this.attrs.total_score.value = math.round(sum, 3);
    }

    setTotal(value) {
        this.scoreKeys().forEach((component_key) => {
            if (component_key !== 'total_score') {
                this.attrs[component_key].value = null;
            }
        });

        this.attrs.total_score.value = (value !== '') ? math.round(value, 3) : '';
    }
}

export default Score;