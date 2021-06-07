const notePanel = new Panel('.add','.delete-all','.note-panel','.note-delete-panel','.note-panel');
notePanel.runPanel();

const clearNotepad = new Cleaner('.note-delete-panel','.agree','.cancelDel','.note-area')
clearNotepad.runDeletePanel();

const createNote = new Creator ('.save','.cancel','#text','#title','#category','.note-area','.note-panel','.error',0)
createNote.runCreator();