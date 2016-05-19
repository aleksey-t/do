CREATE TABLE IF NOT EXISTS boards(
    id text PRIMARY KEY,
    title text NOT NULL CHECK (title <> '')
);

CREATE TABLE IF NOT EXISTS boards_lists(
    board_id text NOT NULL REFERENCES boards ON DELETE RESTRICT,
    list_id text PRIMARY KEY REFERENCES lists ON DELETE CASCADE
);
