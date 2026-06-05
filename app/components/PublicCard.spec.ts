import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import PublicCard from './PublicCard.vue';
import type { PublicCard as PublicCardType } from '~/types/public-card';

const card: PublicCardType = {
  tactId: 'alice',
  theme: 'dark',
  displayName: 'Alice Martin',
  jobTitle: 'Designer produit',
  company: 'TACT',
  bio: 'Crée des liens utiles.',
  phone: '+33123456789',
  email: 'alice@example.com',
  location: 'Paris',
  websites: [
    {
      id: 'website-1',
      cardId: 'card-1',
      url: 'https://example.com',
      label: 'Portfolio',
      position: 0,
      isVisible: true,
    },
  ],
  socials: [
    {
      id: 'social-1',
      cardId: 'card-1',
      platform: 'linkedin',
      url: 'https://linkedin.com/in/alice',
      position: 0,
      isVisible: true,
    },
  ],
};

describe('PublicCard', () => {
  it('renders public identity and emits clicked fields', async () => {
    const wrapper = mount(PublicCard, {
      props: { card },
    });

    expect(wrapper.get('h1').text()).toBe('Alice Martin');
    expect(wrapper.text()).toContain('Designer produit');

    await wrapper.get('a[href="tel:+33123456789"]').trigger('click');

    expect(wrapper.emitted('clickField')).toEqual([['phone']]);
  });
});
