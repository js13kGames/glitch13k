// DEBUG BEGIN
try {
// DEBUG END
var MAP_WIDTH = 9;
var MAP_HEIGHT = 10;
var MAP_DATA = "000000000000000000000000000000000000000000000000000000000001110000001110000005110000000000";
var PLAYER;
var MAP_OBJECT_NAMES = [ 'PLAYER'];
// DEBUG BEGIN
} catch (err) { alert(err); }
// DEBUG END

function mapInit()
{
// DEBUG BEGIN
	try {
// DEBUG END
	_objs.length = 0;
	
	mapLoadFromString(MAP_WIDTH, MAP_HEIGHT, MAP_DATA);
	
	_objs.push(
		new ObjPlayer(6, 7)
		);
	PLAYER = _objs[0];


// DEBUG BEGIN
} catch (err) { alert(err); }
// DEBUG END
}

function mapUpdate()
{
// DEBUG BEGIN
try {
// DEBUG END

// DEBUG BEGIN
} catch (err) { alert(err); }
// DEBUG END
}
