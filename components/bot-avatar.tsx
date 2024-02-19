import { Avatar, AvatarImage } from "./ui/avatar";

export const BotAvatar = ({ src }: { src: string }) => {
  return (
    <Avatar className="h-12 w-12">
      <AvatarImage src={src} />
    </Avatar>
  );
};
