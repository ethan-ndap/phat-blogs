import type { SerializedEditorState, SerializedLexicalNode } from 'lexical';
import type { Blog } from '../payload-types';

type LexicalState = SerializedEditorState<SerializedLexicalNode>;

export const EMPTY_LEXICAL: LexicalState = {
  root: { type: 'root', children: [], direction: 'ltr', format: '', indent: 0, version: 1 },
};

// Small helpers to keep the guard readable
function isObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null;
}

function isChildrenArray(v: unknown): v is Array<{ type: string; version: number }> {
  return (
    Array.isArray(v) &&
    v.every(
      (c) =>
        isObject(c) &&
        typeof c.type === 'string' &&
        typeof c.version === 'number'
    )
  );
}

// Precise runtime guard for the minimal Lexical shape we rely on
function isLexicalState(x: unknown): x is LexicalState {
  if (!isObject(x)) return false;
  const root = (x as { root?: unknown }).root;
  if (!isObject(root)) return false;

  const typeOk = (root as { type?: unknown }).type === 'root';
  const childrenOk = isChildrenArray((root as { children?: unknown }).children);
  const versionOk = typeof (root as { version?: unknown }).version === 'number';
  const indentOk = typeof (root as { indent?: unknown }).indent === 'number';
  const formatOk = typeof (root as { format?: unknown }).format === 'string';

  return typeOk && childrenOk && versionOk && indentOk && formatOk;
}

export function toLexicalState(content: Blog['content']): LexicalState {
  return isLexicalState(content) ? content : EMPTY_LEXICAL;
}
