import uuid

def sanitize_id(id):
    return id.strip().replace(" ", "")

(_ADD, _DELETE, _INSERT) = range(3)
(_ROOT, _DEPTH, _WIDTH) = range(3)

class Node:

    def __init__(self, name, identifier=None, expanded=True):
        self.__identifier = (str(uuid.uuid1()) if identifier is None else
                sanitize_id(str(identifier)))
        self.name = name
        self.expanded = expanded
        self.__bpointer = None
        self.__fpointer = []

    @property
    def identifier(self):
        return self.__identifier

    @property
    def bpointer(self):
        return self.__bpointer

    @bpointer.setter
    def bpointer(self, value):
        if value is not None:
            self.__bpointer = sanitize_id(value)

    @property
    def fpointer(self):
        return self.__fpointer

    def update_fpointer(self, identifier, mode=_ADD):
        if mode is _ADD:
            self.__fpointer.append(sanitize_id(identifier))
        elif mode is _DELETE:
            self.__fpointer.remove(sanitize_id(identifier))
        elif mode is _INSERT:
            self.__fpointer = [sanitize_id(identifier)]

class Tree:

    def __init__(self):
        self.nodes = []

    def get_index(self, position):
        for index, node in enumerate(self.nodes):
            if node.identifier == position:
                break
        return index

    def create_node(self, name, identifier=None, parent=None):

        node = Node(name, identifier)
        self.nodes.append(node)
        self.__update_fpointer(parent, node.identifier, _ADD)
        node.bpointer = parent
        return node

    def show(self, position, level=_ROOT):
        queue = self[position].fpointer
        if level == _ROOT:
            print("{0} [{1}]".format(self[position].name, self[position].identifier))
        else:
            print("\t"*level, "{0} [{1}]".format(self[position].name, self[position].identifier))
        if self[position].expanded:
            level += 1
            for element in queue:
                self.show(element, level)  # recursive call

    def expand_tree(self, position, mode=_DEPTH):
        # Python generator. Loosly based on an algorithm from 'Essential LISP' by
        # John R. Anderson, Albert T. Corbett, and Brian J. Reiser, page 239-241
        yield position
        queue = self[position].fpointer
        while queue:
            yield queue[0]
            expansion = self[queue[0]].fpointer
            if mode is _DEPTH:
                queue = expansion + queue[1:]  # depth-first
            elif mode is _WIDTH:
                queue = queue[1:] + expansion  # width-first

    def is_branch(self, position):
        return self[position].fpointer

    def __update_fpointer(self, position, identifier, mode):
        if position is None:
            return
        else:
            self[position].update_fpointer(identifier, mode)

    def __update_bpointer(self, position, identifier):
        self[position].bpointer = identifier

    def __getitem__(self, key):
        return self.nodes[self.get_index(key)]

    def __setitem__(self, key, item):
        self.nodes[self.get_index(key)] = item

    def __len__(self):
        return len(self.nodes)

    def __contains__(self, identifier):
        return [node.identifier for node in self.nodes if node.identifier is identifier]

if __name__ == "__main__":

    tree = Tree()
    tree.create_node("What kind of vehicle you own?", "Q")  # root node
    tree.create_node("Two Wheeler", "two", parent = "Q")
    tree.create_node("Four Wheeler", "four", parent = "Q")
    tree.create_node("No Vehicle", "no", parent = "Q")
    tree.create_node("What kind of Two Wheeler you own?", "Q1.1", parent = "two")
    tree.create_node("Scooter", "scooter", parent = "Q1.1")
    tree.create_node("Bike", "bike", parent = "Q1.1")
    tree.create_node("Sport Bike (eg. Pulsar)", "sport", parent = "Q1.1")
    tree.create_node("How often do you take your two wheeler for a service?", "Q1.1.1", parent = "scooter")
    tree.create_node("How often do you take your two wheeler for a service?", "Q1.1.1", parent = "bike")
    tree.create_node("How often do you take your two wheeler for a service?", "Q1.1.1", parent = "sport")
    tree.create_node("Very Often (Every Month)", "often", parent = "Q1.1.1")
    tree.create_node("Normally (Every quarter)", "normally", parent = "Q1.1.1")
    tree.create_node("Rarely (Once in 6 months)", "rarely", parent = "Q1.1.1")
    tree.create_node("That's great! Try our Annual Plan on Hoppy.in for a monthly service of your vehichle, just on your door step", "often1", parent = "often")
    tree.create_node("That's good! Try our Annual Plan on Hoppy.in for a monthly service of your vehichle, just on your door step.", "normally1", parent = "normally")
    tree.create_node("That's bad! You should always keep your vehicle's health in check. Try our Annual Plan on Hoppy.in for a monthly service of your vehichle, just on your door step.", "rarely1", parent = "rarely")
    tree.create_node("Yo buddy! Remeber to do car pooling whenever possible to save our environment!", "Q2.1", parent = "four")
    tree.create_node("That's awesome! You know car pooling is the new trend to save environment!", "Q3.1", parent = "no")

    # print("="*80)
    # tree.show("Q")
    # print("="*80)
    # for node in tree.expand_tree("Q", mode=_WIDTH):
    #     print(node)
    # print("="*80)
    tree.show("Q")