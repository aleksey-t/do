import { assert } from 'chai';
import _ from 'lodash';
import db from 'server/db';
import shortid from 'shortid';
import { recreateTables } from '../helpers';
import Activity from 'server/models/Activity';

const cardId = shortid.generate();

describe('Activity', () => {
    beforeEach(recreateTables);

    describe('create', () => {
        it('should create activity and return created entry', () => {
            return Activity.create(cardId, 'cards', 'create')
                .then(entry => {
                    assert.property(entry, 'id');
                    assert.property(entry, 'created_at');
                    assert.deepEqual(_.omit(entry, ['id', 'created_at']), {
                        entry_id: cardId,
                        entry_table: 'cards',
                        action: 'create'
                    });
                });
        });
    });
});