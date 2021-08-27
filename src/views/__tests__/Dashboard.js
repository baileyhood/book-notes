import { shallowMount } from '@vue/test-utils';
import Dashboard from '@/views/Dashboard.vue';

const mockStoreGet = jest.fn();
const mockDispatch = jest.fn();

describe('Dashboard.vue', () => {
  it('renders props.msg when passed', async () => {
    const wrapper = shallowMount(Dashboard, {
			global: {
				mocks: {
					$store: {
						getters: mockStoreGet,
						dispatch: mockDispatch 
					}
				}
			}
		})
    // expect(mockDispatch).toHaveBeenCalledWith('currentBooks/fetchReadLaterList');
  })
})