ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;
  
    const gamemodes = {
      s: "survival",
      c: "creative",
      a: "adventure",
      sp: "spectator",
      0: "survival",
      1: "creative",
      2: "adventure",
      3: "spectator"
    };
    const setGamemode = (player, target, gamemode) => {
      player.runCommand(`/gamemode ${gamemode} ${target.name.getString()}`);
      return 1;
    };
  
    Object.keys(gamemodes).forEach(g => 
      event.register(Commands.literal(`gm${g}`)
        .executes(c => setGamemode(c.source.player, c.source.player, gamemodes[g]))
        .then(Commands.argument('target', Arguments.PLAYER.create(event))
          .executes(c => setGamemode(c.source.player, Arguments.PLAYER.getResult(c, 'target'), gamemodes[g]))
        ))
    );
  })