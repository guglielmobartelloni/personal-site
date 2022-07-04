import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default (context, inject) => {
    Vue.use(
        VueGtag, {
            config: { id: 'G-H2HR29434F' },
            appName: 'bartelloni.it',
            pageTrackerScreenviewEnabled: true,
        },
        context.app.router
    );

    context.$gtag = Vue.$gtag;
    inject('gtag', Vue.$gtag);
};