/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'vue-play';

const load = requireContext => requireContext.keys().map(requireContext);
const scenarios = load(require.context('./scenarios', true, /.js$/));
configure(scenarios, module);
