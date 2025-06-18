import { Button } from "@heroui/react";
import { useTheme } from "@heroui/use-theme";

export function App () {
  const { setTheme } = useTheme()

  return (
    <div>
      <Button color="primary" onPress={() => setTheme('light')}>Light Mode</Button>
      <Button color="primary" onPress={() => setTheme('dark')}>Dark Mode</Button>
    </div>
  )
};