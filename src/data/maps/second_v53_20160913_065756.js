// DEBUG BEGIN
try {
// DEBUG END
var MAP_WIDTH = 32;
var MAP_HEIGHT = 25;
var MAP_DATA = "00000000000000000000000000000000000033133000000000000000000000000000311130033333333333333333000000003111300111111116111111130000000031113003111111161166666300000333311133331111111611111113000003111111111333333333333333130000011111111111000000000000031300000311111111130000000003313313333003333111333303333133031116161130031111111113031111130311161611100111111111110111111303111616113003111111111303111113033333333330033331113333333311130333333333300311111111111113111300311111113001111111111111131113003111111110031111111111111311130031111111300333333333331113111300311133333000000000000311131113003111111130033133133133111311133331111111300311111111111113111111311111113003111111111111131111113313331330031111111111111311111130000000000333333333333333313333300000000000000000000000000000000000000000";
var MAP_OBJECT_NAMES;
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
		new ObjPlayer(6, 3),
		new ObjDoor(6, 1, 0),
		new ObjDoor(11, 7, 1),
		new ObjDoor(13, 11, 1),
		new ObjCube(24, 15),
		new ObjSwitch(20, 21),
		new ObjDoor(17, 9, 0),
		new ObjDoor(17, 23, 0),
		new ObjDoor(24, 21, 2),
		new ObjDoor(30, 15, 1),
		new ObjDoor(28, 21, 0),
		new ObjCrystal(24, 19),
		new ObjSwitch2(27, 14),
		new ObjDoor(23, 8, 2),
		new ObjDoor(30, 10, 1),
		new ObjPortal(23, 10, 3, 0, 1, 0, 0),
		new ObjSwitch(28, 10),
		new ObjPortal(20, 4, -2, 0, 6, 2, 1),
		new ObjSwitch(24, 3),
		new ObjSwitch(25, 3),
		new ObjSwitch(26, 3),
		new ObjDoor(11, 3, 3)
	);

	MAP_OBJECT_NAMES = [ 'PLAYER', 'LIMBO_DOOR1', 'LIMBO_DOOR2', 'TUT_DOOR2', 'TUT_CUBE1', 'TUT_SW1', 'TUT_DOOR3', 'TUT_DOOR4', 'TUT_DOOR5', 'TUT_DOOR6', 'TUT_DOOR7', 'TUT_CRYSTAL', 'TUT_SW2', 'TUT_DOOR8', 'TUT_DOOR9', 'TUT_PORTAL1', 'TUT_SW3', 'TUT_PORTAL2', 'TUT_SW4', 'TUT_SW5', 'TUT_SW6', 'TUT_DOOR10'];


// DEBUG BEGIN
} catch (err) { alert(err); }
// DEBUG END
}

function mapUpdate()
{
// DEBUG BEGIN
try {
// DEBUG END
	var PLAYER = _objs[0];
	var LIMBO_DOOR1 = _objs[1];
	var LIMBO_DOOR2 = _objs[2];
	var TUT_DOOR2 = _objs[3];
	var TUT_CUBE1 = _objs[4];
	var TUT_SW1 = _objs[5];
	var TUT_DOOR3 = _objs[6];
	var TUT_DOOR4 = _objs[7];
	var TUT_DOOR5 = _objs[8];
	var TUT_DOOR6 = _objs[9];
	var TUT_DOOR7 = _objs[10];
	var TUT_CRYSTAL = _objs[11];
	var TUT_SW2 = _objs[12];
	var TUT_DOOR8 = _objs[13];
	var TUT_DOOR9 = _objs[14];
	var TUT_PORTAL1 = _objs[15];
	var TUT_SW3 = _objs[16];
	var TUT_PORTAL2 = _objs[17];
	var TUT_SW4 = _objs[18];
	var TUT_SW5 = _objs[19];
	var TUT_SW6 = _objs[20];
	var TUT_DOOR10 = _objs[21];
LIMBO_DOOR1.targetDoor = TUT_DOOR2;
TUT_DOOR2.targetDoor = LIMBO_DOOR1;
TUT_DOOR3.targetDoor = TUT_DOOR4;
TUT_DOOR4.targetDoor = TUT_DOOR3;
TUT_DOOR6.targetDoor = TUT_DOOR7;
TUT_DOOR7.targetDoor = TUT_DOOR6;
LIMBO_DOOR2.targetDoor = TUT_DOOR11;
TUT_DOOR11.targetDoor = LIMBO_DOOR2;


if (TUT_SW1.switchStatus)
{
TUT_DOOR4.targetDoor = TUT_DOOR5;
TUT_DOOR5.targetDoor = TUT_DOOR4;
}

if (TUT_SW2.switchStatus)
{
TUT_DOOR6.targetDoor = TUT_DOOR8;
TUT_DOOR8.targetDoor = TUT_DOOR6;
TUT_DOOR7.targetDoor = TUT_DOOR9;
TUT_DOOR9.targetDoor = TUT_DOOR7;
}

TUT_PORTAL1.kill = true;
if (TUT_SW3.switchStatus)
{
TUT_PORTAL1.kill = false;
}

TUT_PORTAL2.kill = true;
if (TUT_SW5.switchStatus)
{
TUT_PORTAL2.kill = false;
}

_glitch_time_left = 9999999;

// if (_fhdk_done)
// {
// DOOR11.targetDoor = DOOR2;
// }

// if (LO1.solved)
// {
// PORTAL2.kill = false;
// }

// DEBUG BEGIN
} catch (err) { alert(err); }
// DEBUG END
}
