import { LocalStorageWrapper } from './local-storage-wrapper';

describe('LocalCache', () => {
  it('should create an instance', () => {
    expect(new LocalStorageWrapper<string>("", ()=>"")).toBeTruthy();
  });
});
