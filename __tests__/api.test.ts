import Slapshot from '../lib/index';

describe('slapshot.ts Enums tests', () => {
  let slapshot: Slapshot;

  beforeEach(() => {
    slapshot = new Slapshot({ key: 'test-api-key', env: 'api' });
  });

  afterEach(() => {});

  test('should get game regions', () => {
    const regions = slapshot.regions;
    expect(regions).toEqual(['eu-west', 'na-east', 'na-central', 'na-west', 'oce-east']);
  });

  test('should get game modes', () => {
    const gameModes = slapshot.gameModes;
    expect(gameModes).toEqual(['hockey', 'dodgepuck', 'tag']);
  });

  test('should get game end reasons', () => {
    const endReasons = slapshot.endReasons;
    expect(endReasons).toEqual([
      'EndOfRegulation',
      'Overtime',
      'HomeTeamLeft',
      'AwayTeamLeft',
      'MercyRule',
      'Tie',
      'Forfeit',
      'Cancelled',
      'Unknown',
    ]);
  });

  test('should get game arenas', () => {
    const arenas = slapshot.arenas;
    expect(arenas).toEqual([
      'Slapstadium',
      'Slapville',
      'Slapstadium_Mini',
      'Table_Hockey',
      'Colosseum',
      'Slapville_Jumbo',
      'Slapstation',
      'Slapstadium_XL',
      'Island',
      'Obstacles',
      'Obstacles_XL',
    ]);
  });
});