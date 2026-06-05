import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import InstallLanding from './InstallLanding.vue';

describe('InstallLanding', () => {
  it('renders installation links', () => {
    const wrapper = mount(InstallLanding, {
      props: {
        androidUrl: 'https://play.google.com/store/apps/details?id=app.tact',
        appGalleryUrl: 'https://appgallery.huawei.com/app/tact',
        iosUrl: 'https://apps.apple.com/app/tact',
      },
    });

    expect(wrapper.get('h1').text()).toContain('Ta carte.');
    expect(wrapper.get('a[href*="play.google.com"]').text()).toBe('Play Store');
    expect(wrapper.get('a[href*="appgallery.huawei.com"]').text()).toBe('APPGallery');
    expect(wrapper.get('a[href*="apps.apple.com"]').text()).toBe('Apple Store');
    expect(wrapper.findAll('svg[aria-hidden="true"]')).toHaveLength(3);
  });
});
