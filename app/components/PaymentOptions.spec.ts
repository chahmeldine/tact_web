import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import PaymentOptions from './PaymentOptions.vue';

describe('PaymentOptions', () => {
  it('renders available payment options', () => {
    const wrapper = mount(PaymentOptions);

    expect(wrapper.get('h1').text()).toContain('Simple comme ta carte');
    expect(wrapper.text()).toContain('Gratuit');
    expect(wrapper.text()).toContain('Premium');
    expect(wrapper.text()).toContain('7,99€/mois');
    expect(wrapper.text()).toContain('79,99€/an');
    expect(wrapper.text()).toContain('14,99€');
    expect(wrapper.text()).toContain('24,99€');
  });
});
