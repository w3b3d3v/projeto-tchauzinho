{ pkgs }: {
    deps = [
      pkgs.vite
      pkgs.nodejs-18_x
      pkgs.nodePackages.typescript-language-server
      pkgs.cowsay
      pkgs.yarn
		  pkgs.replitPackages.jest
    ];
}