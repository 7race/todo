import { Tick } from '@atoms/Tick';
import { TickField } from '@atoms/TickField';
import type { CheckMarkProps } from './CheckMarkProps';

export const CheckMark = ({ done }: CheckMarkProps) =>
  done ? (
    <TickField done={done}>
      <Tick />
    </TickField>
  ) : (
    <TickField />
  );
