import glob
import os

def kebab_case_to_camel_case(kebab_string):
  components = kebab_string.split('-')
  return ''.join(c.title() for c in components)

def get_new_filename(path):
  return kebab_case_to_camel_case(os.path.basename(path).split('.')[0])

def write_new_component(filename, contents):
  toWrite = open('radix-codemod/new-files/%s.tsx' %(filename), 'w')
  toWrite.write(contents)

def make_component_contents(filename, svg_contents):
  pre = """import { Component, splitProps } from "solid-js";

export const %s: Component<{ width; height }> = (props) => {
  const [local, others] = splitProps(props, ["width", "height"]);

  return (
    <svg
      style={{ width: local.width, height: local.height }}
      {...others}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
""" %(filename)

  post = """  );
};"""

  return pre + "".join("    " + line + '\n' for line in svg_contents.splitlines()[1:]) + post

filenames = glob.glob("radix-icons/*.svg")

## make index file
# index_contents = ""
# for file_path in filenames:
#   new_filename = get_new_filename(file_path)
#   index_contents += "export * from './%s'" %(new_filename) + "\n"
# open('icons/index.ts', 'w').write(index_contents)

## codemod
# for file_path in filenames:
#   input = open(file_path, 'r').read()
#   new_filename = get_new_filename(file_path)
#   write_new_component(new_filename, make_component_contents(new_filename, input))
  