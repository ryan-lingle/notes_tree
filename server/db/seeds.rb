Branch.destroy_all
root = Branch.create(name: "root")
child = Branch.create(name: "child with space")

root.add_child(child.id)

root.save
