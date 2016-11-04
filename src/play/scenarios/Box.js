/* eslint-disable import/no-extraneous-dependencies */
import { play } from 'vue-play';
import Box from 'components/Box';

play('Box', module)
  .add('default', {
    render: h => h(Box),
    example: '<Box/>',
  });
