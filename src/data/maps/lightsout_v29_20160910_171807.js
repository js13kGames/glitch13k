// DEBUG BEGIN
try {
// DEBUG END
var MAP_WIDTH = 15;
var MAP_HEIGHT = 13;
var MAP_DATA = "000000000000000033333333333330031111166666630031111161166630031111161661130031111161131130031111166131130031111161131130031111166631110031111166631110031111166631110033333333331110000000000000000";
var MAP_OBJECT_NAMES;
var PLAYER;
var PORTAL;
var LO1;
var POT1;
var POT2;
var POT3;
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
		new ObjPlayer(4, 9),
		new ObjPortal(4, 7, 4, 0),
		new ObjPotion(2, 7, 0),
		new ObjPotion(6, 7, 0),
		new ObjPotion(9, 3, 2)
	);
	PLAYER = _objs[0];
	PORTAL = _objs[1];
	POT1 = _objs[2];
	POT2 = _objs[3];
	POT3 = _objs[4];
	LO1 = new LightsOut(3, 3, 3, 3, 2);

	MAP_OBJECT_NAMES = [ 'PLAYER', 'PORTAL', 'POT1', 'POT2', 'POT3'];


// DEBUG BEGIN
} catch (err) { alert(err); }
// DEBUG END
}

function mapUpdate()
{
// DEBUG BEGIN
try {
// DEBUG END
PORTAL.kill = true;

if (LO1.solved)
{
PORTAL.kill = false;
}
// DEBUG BEGIN
} catch (err) { alert(err); }
// DEBUG END
}
